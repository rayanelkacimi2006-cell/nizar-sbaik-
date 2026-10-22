/**
 * NIZAR SBAIK — MAIN APPLICATION LOGIC
 * 
 * Features:
 * - 5-Language Switcher (Arabic RTL, French, English, German, Italian LTR)
 * - Dynamic Menu Rendering & Filtering & Search
 * - Gallery & Lightbox with keyboard navigation
 * - Reservation form validation & Section 6 compliant backend/WhatsApp handler
 * - Owner pre-launch review modal
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentLang: localStorage.getItem('nizar_sbaik_lang') || 'fr', // French default for Agadir, Morocco or ar
    selectedCategory: 'all',
    selectedDietary: 'all',
    searchQuery: '',
    galleryCategory: 'all',
    lightboxIndex: 0
  };

  // Gallery items dataset
  const galleryItems = [
    {
      id: 1,
      image: "images/gallery/gallery-mezze-spread.jpg",
      category: "mezzes",
      titleKey: "cat_mezzes"
    },
    {
      id: 2,
      image: "images/gallery/gallery-charcoal-grills.jpg",
      category: "grills",
      titleKey: "cat_grills"
    },
    {
      id: 3,
      image: "images/food/hummus-bil-tahina.jpg",
      category: "mezzes",
      titleKey: "cat_hummus_mutabbal"
    },
    {
      id: 4,
      image: "images/gallery/gallery-sweets-tea.jpg",
      category: "sweets",
      titleKey: "cat_desserts"
    },
    {
      id: 5,
      image: "images/gallery/gallery-restaurant-table.jpg",
      category: "ambiance",
      titleKey: "gallery_tab_ambiance"
    },
    {
      id: 6,
      image: "images/gallery/gallery-fresh-salad.jpg",
      category: "mezzes",
      titleKey: "cat_fattoush_tabbouleh"
    },
    {
      id: 7,
      image: "images/food/chicken-shawarma.jpg",
      category: "grills",
      titleKey: "cat_shawarma"
    },
    {
      id: 8,
      image: "images/food/kunafa-nabulsiyyeh.jpg",
      category: "sweets",
      titleKey: "cat_desserts"
    },
    {
      id: 9,
      image: "images/gallery/gallery-warm-hospitality.jpg",
      category: "ambiance",
      titleKey: "gallery_tab_ambiance"
    }
  ];

  // DOM Elements cache
  let dom = {};

  function initDOM() {
    dom = {
      html: document.documentElement,
      langBtn: document.getElementById('langBtn'),
      langDropdown: document.getElementById('langDropdown'),
      currentLangLabel: document.getElementById('currentLangLabel'),
      mobileToggle: document.getElementById('mobileToggle'),
      mobileDrawer: document.getElementById('mobileDrawer'),
      drawerBackdrop: document.getElementById('drawerBackdrop'),
      menuCategoryTabs: document.getElementById('menuCategoryTabs'),
      dietaryFilters: document.getElementById('dietaryFilters'),
      menuSearchInput: document.getElementById('menuSearchInput'),
      menuGrid: document.getElementById('menuGrid'),
      galleryGrid: document.getElementById('galleryGrid'),
      galleryFilterBtns: document.querySelectorAll('.gallery-filter-btn'),
      lightboxModal: document.getElementById('lightboxModal'),
      lightboxImg: document.getElementById('lightboxImg'),
      lightboxCaption: document.getElementById('lightboxCaption'),
      lightboxClose: document.getElementById('lightboxClose'),
      lightboxPrev: document.getElementById('lightboxPrev'),
      lightboxNext: document.getElementById('lightboxNext'),
      reservationForm: document.getElementById('reservationForm'),
      resDateInput: document.getElementById('resDate'),
      resTimeSelect: document.getElementById('resTime'),
      resModal: document.getElementById('resModal'),
      resModalSummary: document.getElementById('resModalSummary'),
      resWhatsAppBtn: document.getElementById('resWhatsAppBtn'),
      resModalClose: document.getElementById('resModalClose'),
      ownerGuideModal: document.getElementById('ownerGuideModal'),
      ownerGuideClose: document.getElementById('ownerGuideClose'),
      ownerGuideBtns: document.querySelectorAll('.trigger-owner-guide'),
      topBanner: document.getElementById('topBanner'),
      bannerDismiss: document.getElementById('bannerDismiss'),
      siteHeader: document.querySelector('.site-header')
    };
  }

  // 1. Language Engine
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'fr';
    state.currentLang = lang;
    localStorage.setItem('nizar_sbaik_lang', lang);

    const t = TRANSLATIONS[lang];
    const isRtl = t.dir === 'rtl';

    // Set attributes on <html>
    dom.html.setAttribute('lang', lang);
    dom.html.setAttribute('dir', t.dir);

    // Update active label in dropdown button
    if (dom.currentLangLabel) {
      const flags = { ar: '🇸🇦', fr: '🇫🇷', en: '🇬🇧', de: '🇩🇪', it: '🇮🇹' };
      dom.currentLangLabel.textContent = `${flags[lang] || ''} ${t.langName}`;
    }

    // Highlight active item in language dropdown
    document.querySelectorAll('.lang-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Re-render Dynamic Content
    renderCategoryTabs();
    renderMenuItems();
    renderGallery();
    setupTimeSlots();
  }

  // 2. Menu Rendering & Filtering
  function renderCategoryTabs() {
    if (!dom.menuCategoryTabs) return;
    const t = TRANSLATIONS[state.currentLang];

    dom.menuCategoryTabs.innerHTML = MENU_CATEGORIES.map(cat => {
      const label = t[cat.key] || cat.id;
      const isActive = state.selectedCategory === cat.id;
      return `
        <button type="button" class="category-tab-btn ${isActive ? 'active' : ''}" data-category="${cat.id}">
          ${label}
        </button>
      `;
    }).join('');

    // Attach listeners
    dom.menuCategoryTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.dataset.category;
        renderCategoryTabs();
        renderMenuItems();
      });
    });
  }

  function renderMenuItems() {
    if (!dom.menuGrid) return;
    const t = TRANSLATIONS[state.currentLang];
    const isAr = state.currentLang === 'ar';
    const currency = isAr ? RESTAURANT_CONFIG.pricing.currencySymbolArabic : RESTAURANT_CONFIG.pricing.currencySymbol;

    // Filter items
    const filtered = MENU_ITEMS.filter(item => {
      // Category match
      if (state.selectedCategory !== 'all') {
        if (state.selectedCategory === 'syrian-mezzes') {
          if (!['syrian-mezzes', 'hummus-mutabbal', 'fattoush-tabbouleh', 'kibbeh-sambousek'].includes(item.categoryId)) {
            return false;
          }
        } else if (item.categoryId !== state.selectedCategory) {
          return false;
        }
      }

      // Dietary filter match
      if (state.selectedDietary === 'vegetarian' && !item.tags.includes('vegetarian')) return false;
      if (state.selectedDietary === 'grill' && !item.tags.includes('grill') && item.categoryId !== 'syrian-grills') return false;
      if (state.selectedDietary === 'special' && !item.tags.includes('signature') && !item.tags.includes('chef-special')) return false;

      // Search match
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        const tr = item.translations[state.currentLang] || item.translations.en;
        const nameMatch = tr.name.toLowerCase().includes(query) || (tr.nameSub && tr.nameSub.toLowerCase().includes(query));
        const descMatch = tr.description.toLowerCase().includes(query);
        if (!nameMatch && !descMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      dom.menuGrid.innerHTML = `
        <div class="menu-empty-state">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍</p>
          <p>${t.menu_empty_search}</p>
        </div>
      `;
      return;
    }

    dom.menuGrid.innerHTML = filtered.map(item => {
      const tr = item.translations[state.currentLang] || item.translations.en;
      const tagBadges = item.tags.map(tag => {
        if (tag === 'signature') return `<span class="card-tag tag-signature">Signature</span>`;
        if (tag === 'vegetarian') return `<span class="card-tag tag-vegetarian">Vegetarian</span>`;
        if (tag === 'chef-special') return `<span class="card-tag tag-chef-special">Chef's Selection</span>`;
        return '';
      }).filter(Boolean).join('');

      return `
        <article class="menu-card" data-dish-id="${item.id}">
          <div class="menu-card-image-wrapper">
            <img src="${item.image}" alt="${tr.name}" class="menu-card-img" loading="lazy" />
            <div class="menu-card-tags">
              ${tagBadges}
            </div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3 class="menu-dish-name">${tr.name}</h3>
              <div class="menu-dish-price-box">
                <span class="menu-dish-price">${item.price} ${currency}</span>
                <span class="dish-sample-pill">${t.menu_dish_sample_badge}</span>
              </div>
            </div>
            ${tr.nameSub ? `<div class="menu-dish-subname">${tr.nameSub}</div>` : ''}
            <p class="menu-dish-description">${tr.description}</p>
            <div class="menu-card-footer">
              <span style="font-size: 0.78rem; color: #888;">Nizar Sbaik • Agadir</span>
              <button type="button" class="btn-reserve-dish" data-dish-name="${tr.name}">
                ${t.nav_cta_reserve} &rarr;
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach "Reserve dish" button handler
    dom.menuGrid.querySelectorAll('.btn-reserve-dish').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishName = btn.dataset.dishName;
        const notesField = document.getElementById('resNotes');
        if (notesField) {
          notesField.value = `${notesField.value ? notesField.value + ' | ' : ''}Dish request: ${dishName}`;
        }
        const resSection = document.getElementById('reservations');
        if (resSection) {
          resSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // 3. Gallery & Lightbox
  function renderGallery() {
    if (!dom.galleryGrid) return;
    const t = TRANSLATIONS[state.currentLang];

    const filtered = galleryItems.filter(item => {
      if (state.galleryCategory === 'all') return true;
      return item.category === state.galleryCategory;
    });

    dom.galleryGrid.innerHTML = filtered.map((item, idx) => {
      const caption = t[item.titleKey] || 'Nizar Sbaik';
      return `
        <div class="gallery-item" data-index="${idx}" data-img="${item.image}" data-caption="${caption}">
          <img src="${item.image}" alt="${caption}" loading="lazy" />
          <div class="gallery-overlay">
            <div class="gallery-item-title">${caption}</div>
            <div class="gallery-item-cat">Hay Al Dakhla, Agadir</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events for lightbox
    dom.galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const imgUrl = el.dataset.img;
        const caption = el.dataset.caption;
        openLightbox(imgUrl, caption);
      });
    });
  }

  function openLightbox(imgUrl, caption) {
    if (!dom.lightboxModal) return;
    dom.lightboxImg.src = imgUrl;
    dom.lightboxCaption.textContent = caption;
    dom.lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!dom.lightboxModal) return;
    dom.lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // 4. Reservation System
  function setupReservationForm() {
    if (!dom.reservationForm) return;

    // Set date input min/max
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;

    const maxD = new Date();
    maxD.setDate(maxD.getDate() + (RESTAURANT_CONFIG.reservations.advanceBookingDays || 60));
    const maxDate = `${maxD.getFullYear()}-${String(maxD.getMonth() + 1).padStart(2, '0')}-${String(maxD.getDate()).padStart(2, '0')}`;

    if (dom.resDateInput) {
      dom.resDateInput.min = minDate;
      dom.resDateInput.max = maxDate;
      dom.resDateInput.value = minDate;
    }

    setupTimeSlots();

    // Form submit listener
    dom.reservationForm.addEventListener('submit', handleReservationSubmit);
  }

  function setupTimeSlots() {
    if (!dom.resTimeSelect) return;
    const slots = RESTAURANT_CONFIG.reservations.availableTimeSlots || [
      "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
      "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
    ];

    const currentVal = dom.resTimeSelect.value;
    dom.resTimeSelect.innerHTML = slots.map(slot => `
      <option value="${slot}" ${slot === currentVal ? 'selected' : ''}>${slot}</option>
    `).join('');
  }

  async function handleReservationSubmit(e) {
    e.preventDefault();
    const t = TRANSLATIONS[state.currentLang];

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const seating = document.getElementById('resSeating').value;
    const notes = document.getElementById('resNotes').value.trim();

    // Validation
    let isValid = true;
    const nameGroup = document.getElementById('resName').closest('.form-group');
    const phoneGroup = document.getElementById('resPhone').closest('.form-group');

    if (!name || name.length < 2) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    if (!phone || phone.length < 6) {
      phoneGroup.classList.add('has-error');
      isValid = false;
    } else {
      phoneGroup.classList.remove('has-error');
    }

    if (!isValid) {
      alert(t.form_validation_required);
      return;
    }

    const reservationPayload = {
      restaurant: "Nizar Sbaik",
      location: "Hay Al Dakhla, Agadir",
      customerName: name,
      phoneNumber: phone,
      reservationDate: date,
      reservationTime: time,
      numberOfGuests: guests,
      seatingPreference: seating,
      specialRequests: notes,
      submissionTimestamp: new Date().toISOString()
    };

    // Brief Section 6 Compliance:
    // "Connect it to a real backend or reservation service if configured.
    // If no backend is available, explain the required setup and do not display a false success message or claim a reservation was received."
    const backendEndpoint = RESTAURANT_CONFIG.reservations.backendEndpoint;

    if (backendEndpoint && backendEndpoint.trim() !== '') {
      // Real backend configured
      try {
        const response = await fetch(backendEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationPayload)
        });

        if (response.ok) {
          const resData = await response.json();
          showReservationModal({
            ...reservationPayload,
            bookingReference: resData.bookingReference || 'NZR-' + Math.floor(100000 + Math.random() * 900000),
            isBackendConfirmed: true
          });
          dom.reservationForm.reset();
          return;
        } else {
          throw new Error('Backend returned status ' + response.status);
        }
      } catch (err) {
        console.warn('Backend submission failed, falling back to transparent dialog:', err);
      }
    }

    // No backend configured or endpoint failed:
    // Open transparent modal with summary and WhatsApp transmission option
    showReservationModal(reservationPayload);
  }

  function showReservationModal(data) {
    if (!dom.resModal) return;
    const t = TRANSLATIONS[state.currentLang];

    const confirmedHtml = data.isBackendConfirmed ? `
      <div style="background: #E8F5E9; border: 1px solid #A5D6A7; color: #1B5E20; padding: 0.8rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem; text-align: center; font-weight: 700;">
        ✓ ${t.langName === 'العربية' ? 'تم تسجيل طلب حجزكم بنجاح برقم مرجعي:' : 'Demande enregistrée avec succès ! Référence :'} <span style="text-decoration: underline;">${data.bookingReference}</span>
      </div>
    ` : '';

    dom.resModalSummary.innerHTML = `
      ${confirmedHtml}
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_name_label.replace('*', '').trim()}:</span>
        <span class="res-summary-val">${escapeHtml(data.customerName)}</span>
      </div>
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_phone_label.replace('*', '').trim()}:</span>
        <span class="res-summary-val">${escapeHtml(data.phoneNumber)}</span>
      </div>
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_date_label.replace('*', '').trim()}:</span>
        <span class="res-summary-val">${escapeHtml(data.reservationDate)}</span>
      </div>
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_time_label.replace('*', '').trim()}:</span>
        <span class="res-summary-val">${escapeHtml(data.reservationTime)}</span>
      </div>
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_guests_label.replace('*', '').trim()}:</span>
        <span class="res-summary-val">${escapeHtml(data.numberOfGuests)}</span>
      </div>
      ${data.specialRequests ? `
      <div class="res-summary-row">
        <span class="res-summary-label">${t.form_notes_label}:</span>
        <span class="res-summary-val">${escapeHtml(data.specialRequests)}</span>
      </div>
      ` : ''}
    `;

    // Prepare WhatsApp Message
    const waText = encodeURIComponent(
      `*Réservation / حجز طاولة — Nizar Sbaik*\n` +
      `Nom / الاسم: ${data.customerName}\n` +
      `Tél / الهاتف: ${data.phoneNumber}\n` +
      `Date / التاريخ: ${data.reservationDate}\n` +
      `Heure / الوقت: ${data.reservationTime}\n` +
      `Personnes / الأشخاص: ${data.numberOfGuests}\n` +
      (data.specialRequests ? `Notes / ملاحظات: ${data.specialRequests}\n` : '') +
      `Lieu: Hay Al Dakhla, Agadir`
    );

    const waNum = RESTAURANT_CONFIG.contact.whatsappNumber || '';
    dom.resWhatsAppBtn.href = waNum ? `https://wa.me/${waNum}?text=${waText}` : `https://api.whatsapp.com/send?text=${waText}`;

    dom.resModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeReservationModal() {
    if (!dom.resModal) return;
    dom.resModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // 5. Setup Event Listeners
  function setupEventListeners() {
    // Top banner dismiss
    if (dom.bannerDismiss && dom.topBanner) {
      dom.bannerDismiss.addEventListener('click', () => {
        dom.topBanner.style.display = 'none';
      });
    }

    // Language dropdown toggle
    if (dom.langBtn && dom.langDropdown) {
      dom.langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dom.langDropdown.classList.contains('open');
        dom.langDropdown.classList.toggle('open', !isOpen);
        dom.langBtn.setAttribute('aria-expanded', !isOpen);
      });

      document.addEventListener('click', () => {
        dom.langDropdown.classList.remove('open');
        dom.langBtn.setAttribute('aria-expanded', 'false');
      });

      // Language selection clicks
      document.querySelectorAll('.lang-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetLang = btn.dataset.lang;
          setLanguage(targetLang);
          dom.langDropdown.classList.remove('open');
        });
      });
    }

    // Mobile Navigation Drawer Toggle
    if (dom.mobileToggle && dom.mobileDrawer) {
      dom.mobileToggle.addEventListener('click', () => {
        const isOpen = dom.mobileDrawer.classList.contains('open');
        dom.mobileDrawer.classList.toggle('open', !isOpen);
        dom.mobileToggle.classList.toggle('open', !isOpen);
        dom.drawerBackdrop.classList.toggle('open', !isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
      });

      dom.drawerBackdrop.addEventListener('click', closeMobileDrawer);

      // Close drawer on link click
      document.querySelectorAll('.drawer-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
      });
    }

    // Menu Live Search
    if (dom.menuSearchInput) {
      dom.menuSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderMenuItems();
      });
    }

    // Dietary Filters
    document.querySelectorAll('.dietary-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.dietary-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.selectedDietary = chip.dataset.dietary;
        renderMenuItems();
      });
    });

    // Gallery Category Filtering
    dom.galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.galleryCategory = btn.dataset.galleryCategory;
        renderGallery();
      });
    });

    // Lightbox Controls
    if (dom.lightboxClose) {
      dom.lightboxClose.addEventListener('click', closeLightbox);
    }
    if (dom.lightboxModal) {
      dom.lightboxModal.addEventListener('click', (e) => {
        if (e.target === dom.lightboxModal) closeLightbox();
      });
    }

    // Keyboard support for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeReservationModal();
        closeOwnerGuideModal();
        closeMobileDrawer();
      }
    });

    // Reservation Modal Close
    if (dom.resModalClose) {
      dom.resModalClose.addEventListener('click', closeReservationModal);
    }

    // Owner Pre-Launch Guide Modal
    dom.ownerGuideBtns.forEach(btn => {
      btn.addEventListener('click', openOwnerGuideModal);
    });
    if (dom.ownerGuideClose) {
      dom.ownerGuideClose.addEventListener('click', closeOwnerGuideModal);
    }
    if (dom.ownerGuideModal) {
      dom.ownerGuideModal.addEventListener('click', (e) => {
        if (e.target === dom.ownerGuideModal) closeOwnerGuideModal();
      });
    }

    // Header scroll background effect
    window.addEventListener('scroll', () => {
      if (dom.siteHeader) {
        dom.siteHeader.classList.toggle('scrolled', window.scrollY > 40);
      }
      highlightActiveNavLink();
    });
  }

  function closeMobileDrawer() {
    if (!dom.mobileDrawer) return;
    dom.mobileDrawer.classList.remove('open');
    dom.mobileToggle.classList.remove('open');
    dom.drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openOwnerGuideModal() {
    if (!dom.ownerGuideModal) return;
    dom.ownerGuideModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOwnerGuideModal() {
    if (!dom.ownerGuideModal) return;
    dom.ownerGuideModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initDOM();
    setupEventListeners();
    setupReservationForm();
    setLanguage(state.currentLang);
  });

})();
