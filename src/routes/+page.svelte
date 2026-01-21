<script>
  // No script needed for this page
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Services from '$lib/components/Services.svelte';
    import About from '$lib/components/About.svelte';
    import Contact from '$lib/components/Contact.svelte';

</script>

<article class="bg-background-light dark:bg-background-dark text-white selection:bg-primary selection:text-white">
<Header />
<main class="pt-24">
<!-- Hero Section -->
<section class="min-h-[80vh] flex flex-col justify-center px-6 py-20 grid-bg" id="home">
<div class="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
<div class="flex flex-col gap-8">
<div class="space-y-4">
<span class="inline-block bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest neo-shadow">Available for Hire</span>
<h1 class="text-white text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase">
                            Bofa <br/> Mpama
                        </h1>
<h2 class="text-2xl md:text-3xl font-bold text-primary italic">
                            Web Developer &amp; Video Editor
                        </h2>
<p class="text-lg md:text-xl text-white/70 max-w-[500px] font-medium leading-relaxed">
                            I build web solutions for purpose-driven clients who want to make a bold impact online.
                        </p>
</div>
<div class="flex flex-wrap gap-4">
    <a href="#projects">
<button class="flex min-w-[180px] cursor-pointer items-center justify-center bg-primary text-white text-base font-black uppercase tracking-widest h-14 px-8 neo-shadow hover:bg-blue-600 transition-all neo-button">
                            View My Work
                        </button></a>
<div class="hidden flex items-center gap-4 px-6 border-2 border-white/20 neo-shadow bg-background-dark/50">
<span class="material-symbols-outlined text-primary">play_circle</span>
<span class="font-bold uppercase text-sm">Showreel 2024</span>
</div>
</div>
</div>
<div class="relative group">
<div class="absolute -inset-4 bg-primary/20 border-2 border-primary neo-shadow opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div class="relative w-full aspect-square bg-white overflow-hidden border-4 border-white neo-shadow-blue">
<img alt="Portrait" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Modern high contrast portrait of Bofa Mpama" src="boff.png"/>
</div>
</div>
</div>
<!-- Scroll Indicator -->
 <a href="#projects" aria-label="Scroll to Projects Section">
<div class="flex justify-center mt-20">
<div class="animate-bounce border-2 border-white p-2">
<span class="material-symbols-outlined">expand_more</span>
</div>
</div>
</a>
</section>

<Projects />
<Services />
<About />
<Contact />
</main>
<Footer />

</article>
