document.addEventListener("DOMContentLoaded", function() {
    // 1. Target the toggle menu button using its specific aria-label attribute
    const menuBtn = document.querySelector('button[aria-label="Toggle menu"]');

    if (!menuBtn) return; // Exit if the layout is different on other files

    // 2. Dynamically build the mobile slide-out menu drawer template
    const mobileMenuOverlay = document.createElement("div");
    mobileMenuOverlay.id = "customMobileMenu";
    mobileMenuOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 300px;
        height: 100%;
        background: #111c3a;
        z-index: 100000;
        box-shadow: 5px 0 25px rgba(0,0,0,0.5);
        transition: left 0.3s cubic-bezier(0.16, 1, 0.32, 1);
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `;

    // 3. Populate your new menu links (cloned from your index.html headers)
    mobileMenuOverlay.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:24px; font-weight:900; color:#fff; font-family:'Outfit',sans-serif;">Velora</span>
            <button id="closeMobileMenu" style="background:none; border:none; color:#fff; cursor:pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <nav style="display:flex; flex-direction:column; gap:16px; font-family:'Outfit',sans-serif;">
            <a href="index.html" style="color:#fff; text-decoration:none; font-weight:500; font-size:16px;">Home</a>
            <a href="about.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">About</a>
            <a href="top-earners.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">Top Earners</a>
            <a href="blog.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">Blog</a>
            <a href="faq.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">FAQ</a>
            <a href="scam-alert.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">Scam Alert</a>
            <a href="contact.html" style="color:#94a3b8; text-decoration:none; font-weight:500; font-size:16px;">Contact</a>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:10px 0;">
            <a href="login.html" style="color:#fff; text-decoration:none; font-weight:600;">Login</a>
            <a href="register.html" style="display:block; text-align:center; background:linear-gradient(135deg, #e2b04a, #9e721d); color:#000; padding:10px; border-radius:9999px; font-weight:700; text-decoration:none;">Get Started</a>
        </nav>
    `;

    // Create a dark backdrop shading layer
    const backdrop = document.createElement("div");
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 99999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(4px);
    `;

    // Append modules into page layout safely
    document.body.appendChild(backdrop);
    document.body.appendChild(mobileMenuOverlay);

    // 4. Interaction Engine Control Logics
    function openMenu() {
        mobileMenuOverlay.style.left = "0";
        backdrop.style.opacity = "1";
        backdrop.style.pointerEvents = "auto";
    }

    function closeMenu() {
        mobileMenuOverlay.style.left = "-100%";
        backdrop.style.opacity = "0";
        backdrop.style.pointerEvents = "none";
    }

    // Toggle click listeners
    menuBtn.addEventListener("click", openMenu);
    backdrop.addEventListener("click", closeMenu);

    // Defer check to clear toggle links inside shadow nodes
    setTimeout(() => {
        const closeBtn = document.getElementById("closeMobileMenu");
        if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    }, 100);
});