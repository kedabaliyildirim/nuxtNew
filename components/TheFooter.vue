<template>
  <div class="footer-main">
    <div class="footer-link-set">
      <div class="logo-class">
        <nuxt-img id="footerLogo" class="logo" src="/KeyForge4.png"></nuxt-img>
      </div>
      <ul>
        <li>something 1</li>
        <li>something 2</li>
        <li>something 3</li>
        <li>something 4</li>
        <li>something 5</li>
      </ul>
      <ul>
        <li>something 1</li>
        <li>something 2</li>
        <li>something 3</li>
        <li>something 4</li>
        <li>something 5</li>
      </ul>
    </div>
    <p class="footer-info">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      iusto quae aliquid? Ea consectetur sint obcaecati quod dolorem nobis
      aperiam dolor non ipsa dolorum, labore dicta laudantium et nihil debitis.
    </p>
  </div>
</template>
<script></script>
<style scoped>
.footer-link-set {
  color: white;
  background-color: #003459;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1%;
}

.footer-main {
  display: flex;
  flex-direction: column;
  background-color: #003459;
  color: white;
  margin: 0%;
  padding: 0%;
}

.footer-info {
  margin: 0 5%;
  margin-bottom: 2%;
  padding: 0;
}

.logo {
  width: 100%;
  height: 90%;
  display: inline;
  margin: 1% 22.5%;
}

.logo-class {
  margin-right: 5%;
  display: flex;
  width: 5%;
  justify-self: start;
  transition: 0.4s ease-in-out;
}

.logo-class:hover {
  cursor: pointer;
  transform: rotate(90deg);
  margin-bottom: 1%;
}

ul {
  margin: 1% 7.5%;
}
</style>
