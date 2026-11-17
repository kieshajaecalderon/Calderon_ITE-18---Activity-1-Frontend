
<template>
  <div class="flex min-h-screen flex-col bg-[#FCF8F5] text-[#594447] md:h-screen md:min-h-0 md:overflow-hidden">

    <!-- Navigation Menu -->
    <header class="mx-auto w-full max-w-6xl px-6 py-5 md:px-12">
      <SiteNavigation />
    </header>

    <!-- Homepage Content -->
    <main class="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center px-6 py-12">

      <section class="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16">

        <!-- Introduction -->
        <div class="order-2 space-y-5 text-center md:order-1 md:text-left">

          <h1 class="font-serif text-2xl leading-tight tracking-tight sm:text-3xl md:text-[2rem] lg:text-[2.25rem]">
            Hello,
            <br />
            I am
            <span class="text-[#B77E83]">
              Kiesha Jae T. Calderon.
            </span>
          </h1>

          <div class="mx-auto h-1 w-16 rounded-full bg-[#D9A6A9] md:mx-0"></div>

          <p class="mx-auto max-w-lg text-sm leading-7 text-[#806B69] sm:text-base md:mx-0">
            A college student passionate about technology,
            student leadership,
            <br class="hidden sm:block" />
            and continuous learning.
          </p>

          <!-- Welcome Message -->
          <div class="pt-2">
            <h2 class="font-serif text-xl italic text-[#A96F7A] sm:text-2xl">
              Welcome to my little space! ♡
            </h2>

            <p class="mt-2 text-sm leading-7 text-[#806B69]">
              I'm glad you're here. Feel free to explore
              and get to know more about me.
            </p>
          </div>

        </div>

        <!-- Profile Picture -->
        <div class="order-1 flex justify-center md:order-2">

          <div class="group relative h-56 w-56 rounded-full bg-[#F1E2DC] p-3 shadow-xl transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_8px_rgba(217,166,169,0.65)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">

            <div class="h-full w-full overflow-hidden rounded-full border border-[#D9A6A9]">
              <img
                src="/images/profile.jpg"
                alt="Kiesha Jae T. Calderon"
                class="h-full w-full rounded-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            <!-- Image Caption -->
            <span class="absolute -bottom-3 right-4 rounded-full bg-white px-5 py-2 font-serif text-sm italic text-[#A96F7A] shadow-md">
              a little about me ♡
            </span>

          </div>

        </div>

      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-[#F0DFDA] px-6 py-4 text-center text-xs text-[#A88D8A]">
      © 2026 Kiesha Jae T. Calderon. All rights reserved.
    </footer>

  </div>
</template>
