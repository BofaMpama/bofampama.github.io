
<!-- Mobile Navigation Logic (SAFE) -->
<script defer>
  const menuBtn = document.getElementById('menu-btn');
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    menuIcon.textContent = isOpen ? 'close' : 'menu';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      menuIcon.textContent = 'menu';
      isOpen = false;
    });
  });
</script>


<header class="fixed top-0 left-0 right-0 z-[100] bg-background-dark/80 backdrop-blur-sm border-b-2 border-white/10">
  <div class="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">

    <!-- Brand -->
    <div class="flex items-center gap-3">
      <div class="size-8 bg-primary flex items-center justify-center neo-shadow">
        <span class="material-symbols-outlined text-white text-xl">terminal</span>
      </div>
      <h2 class="text-white text-xl font-bold tracking-tighter uppercase">
        Bofa Mpama
      </h2>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-10">
      <a class="nav-link" href="#home">Home</a>
      <a class="nav-link" href="#projects">Projects</a>
      <a class="nav-link" href="#services">Services</a>
      <a class="nav-link" href="#about">About</a>
      <a href="#contact">
        <button class="bg-primary text-white text-sm font-bold uppercase px-6 py-2 neo-shadow hover:bg-blue-600 transition-all">
          Contact Me
        </button>
      </a>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      id="menu-btn"
      aria-label="Toggle navigation"
      class="md:hidden text-white flex items-center justify-center p-2 border-2 border-white/10 hover:bg-primary transition-all"
    >
      <span class="material-symbols-outlined text-2xl" id="menu-icon">menu</span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    class="fixed inset-0 top-[72px] z-[90] hidden flex-col bg-black/95 backdrop-blur-xl border-t-2 border-primary md:hidden"
  >
    <nav class="flex flex-col gap-8 p-8">
      <a class="mobile-link text-4xl font-black uppercase tracking-tighter text-white hover:text-primary" href="#home">Home</a>
      <a class="mobile-link text-4xl font-black uppercase tracking-tighter text-white hover:text-primary" href="#projects">Projects</a>
      <a class="mobile-link text-4xl font-black uppercase tracking-tighter text-white hover:text-primary" href="#services">Services</a>
      <a class="mobile-link text-4xl font-black uppercase tracking-tighter text-white hover:text-primary" href="#about">About</a>

      <hr class="border-white/10">

      <a href="#contact" class="mobile-link">
        <button class="w-full bg-primary text-white text-xl font-black uppercase py-6 neo-shadow">
          Contact Me
        </button>
      </a>
    </nav>
  </div>
</header>
