
<section class="max-w-6xl mx-auto px-6 py-24 mb-32" id="contact">
    <div class="grid md:grid-cols-2 gap-20">
        <div class="flex flex-col justify-between">
            <div>
                <h2 class="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-12">
                    Let's<br/>Work<br/>Together
                </h2>
                <p class="text-xl max-w-sm font-medium leading-relaxed opacity-70">
                    I'm currently available for freelance projects and consulting. Let's build something bold.
                </p>
            </div>
        </div>

        <div id="form-wrapper" class="bg-gray-50 dark:bg-[#1e2026] p-10 md:p-16 border-t-8 border-primary relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            
            <form 
                id="contact-form"
                action="https://formspree.io/f/xaqqkzrq" 
                method="POST" 
                class="space-y-12 transition-all duration-500 ease-in-out"
            >
                <div class="group">
                    <label class="block text-xs font-black uppercase tracking-widest text-primary mb-2">Full Name</label>
                    <input name="name" required class="w-full bg-transparent border-none border-b-2 border-black/10 dark:border-white/10 py-4 text-xl font-medium placeholder:opacity-20 transition-all rounded-none focus:ring-0 px-0" placeholder="BOFA MPAMA" type="text"/>
                </div>
                <div class="group">
                    <label class="block text-xs font-black uppercase tracking-widest text-primary mb-2">Email Address</label>
                    <input name="email" required class="w-full bg-transparent border-none border-b-2 border-black/10 dark:border-white/10 py-4 text-xl font-medium placeholder:opacity-20 transition-all rounded-none focus:ring-0 px-0" placeholder="HELLO@BOFAMPAMA.COM" type="email"/>
                </div>
                <div class="group">
                    <label class="block text-xs font-black uppercase tracking-widest text-primary mb-2">Project Details</label>
                    <textarea name="message" required class="w-full bg-transparent border-none border-b-2 border-black/10 dark:border-white/10 py-4 text-xl font-medium placeholder:opacity-20 transition-all rounded-none focus:ring-0 px-0 resize-none" placeholder="DESCRIBE YOUR VISION..." rows="4"></textarea>
                </div>
                <button id="submit-btn" class="w-full bg-primary text-white py-6 px-10 font-black uppercase text-lg tracking-widest flex items-center justify-center gap-4 hover:brightness-110 active:scale-[0.98] transition-all" type="submit">
                    <span id="btn-text">Send Message</span>
                    <span class="material-symbols-outlined">send</span>
                </button>
            </form>

            <div id="success-message" class="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-gray-50 dark:bg-[#1e2026] transform translate-y-12 opacity-0 transition-all duration-700 ease-out">
                <div class="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <span class="material-symbols-outlined text-5xl">check</span>
                </div>
                <h3 class="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-none mb-4">Received.</h3>
                <p class="text-xl font-medium opacity-70">I'll be in touch shortly.</p>
            </div>
        </div>
    </div>
</section>

