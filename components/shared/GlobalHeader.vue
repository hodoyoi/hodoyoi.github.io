<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/static" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >ほどよい合同会社</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto"
        :class="{ hidden: !isOpen }"
        id="navbar-default"
      >
        <ul
          class="flex flex-col p-4 mt-4 rounded bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li><GlobalHeaderLink href="/abount">会社概要</GlobalHeaderLink></li>
          <li><GlobalHeaderLink href="/samples">制作事例</GlobalHeaderLink></li>
          <li><GlobalHeaderLink href="/school">スクール</GlobalHeaderLink></li>
          <li><GlobalHeaderLink href="/contact">お問合せ</GlobalHeaderLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import GlobalHeaderLink from '~/components/shared/GlobalHeaderLink.vue'

const isOpen = ref(false)

const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>
