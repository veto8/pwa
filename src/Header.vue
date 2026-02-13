<!-- Header.vue -->
<template>
  <header class="container-fluid fixed-header">
      <nav>
            <ul>
	            <li><strong>My App</strong></li>
		          </ul>
			        <ul>
				        <li><a href="#">Home</a></li>
					        <li><a href="#">About</a></li>
						        <li><a href="#">Contact</a></li>
							      </ul>
							          </nav>
								    </header>
								    </template>

<style scoped>
.fixed-header {
  position: fixed;
    top: 0;
      left: 0;
        right: 0;
	  z-index: 1000;
	    background: var(--pico-background-color);
	      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	        padding: 1rem 0;
		}

/* Adjust body padding to prevent content hiding under header */
body {
  padding-top: 70px; /* Adjust based on header height */
  }
  </style>
  