<template>
<header class="container-fluid is-fixed-above-lg">
  <nav>
    <ul>
      <li><img src="/img/logo.png" alt="logo"></li>      
      <li><strong>PWA</strong></li>
    </ul>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>      
      <li><RouterLink to="/about">About</RouterLink></li>

      <li><a href="contact.html">Contact</a></li>      
    </ul>
  </nav>
</header>
      <RouterView />                                                              
</template>

