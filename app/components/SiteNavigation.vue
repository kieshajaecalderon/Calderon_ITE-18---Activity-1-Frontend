
<template>
  <nav class="flex items-center justify-between gap-4">
    <!-- Website Name with Heart -->
    <NuxtLink
      to="/"
      class="flex items-center gap-2 font-serif text-xl font-bold tracking-wide text-[#A96F7A] sm:text-2xl"
    >
      Kiesha's Space
      <span class="text-[#D9A6A9]">♡</span>
    </NuxtLink>

    <!-- Navigation Links -->
    <div class="flex items-center gap-5 text-sm sm:gap-8">
      <NuxtLink
        to="/"
        class="text-[#806B69] transition hover:text-[#B77E83]"
        active-class="!text-[#A96F7A] font-semibold"
      >
        Home
      </NuxtLink>

      <NuxtLink
        to="/profile"
        class="text-[#806B69] transition hover:text-[#B77E83]"
        active-class="!text-[#A96F7A] font-semibold"
      >
        Profile
      </NuxtLink>
    </div>
  </nav>
</template>
