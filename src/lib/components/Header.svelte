<header class="fixed top-0 left-0 right-0 z-[100] bg-background-dark/80 backdrop-blur-sm border-b-2 border-white/10 px-6 py-4">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
            <div class="size-8 bg-primary flex items-center justify-center neo-shadow">
                <span class="material-symbols-outlined text-white text-xl">terminal</span>
            </div>
            <h2 class="text-white text-xl font-bold tracking-tighter uppercase">Bofa Mpama</h2>
        </div>

        <nav class="hidden md:flex items-center gap-10">
            <a class="text-white text-sm font-bold uppercase hover:text-primary transition-colors" href="#home">Home</a>
            <a class="text-white text-sm font-bold uppercase hover:text-primary transition-colors" href="#projects">Projects</a>
            <a class="text-white text-sm font-bold uppercase hover:text-primary transition-colors" href="#services">Services</a>
            <a class="text-white text-sm font-bold uppercase hover:text-primary transition-colors" href="#about">About</a>
            <a href="#contact">
                <button class="bg-primary text-white text-sm font-bold uppercase px-6 py-2 neo-shadow hover:bg-blue-600 transition-all">
                    Contact Me
                </button>
            </a>
        </nav>

        <button id="menu-btn" class="md:hidden text-white flex items-center justify-center p-2 border-2 border-white/10 hover:bg-primary transition-all">
            <span class="material-symbols-outlined" id="menu-icon">menu</span>
        </button>
    </div>

    <div id="mobile-menu" class="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl z-[90] hidden flex-col p-8 md:hidden transition-all border-t-2 border-primary">
        <nav class="flex flex-col gap-8">
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