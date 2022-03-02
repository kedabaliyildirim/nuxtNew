<template>
  <section id="main-about-page">
    <div class="about-content">
      <h1 class="about-title">{{ aboutArticleProp.title }}</h1>
      <p>{{ aboutArticleProp.description }}</p>
      <h3>CONTACT</h3>
      <p>
        {{ aboutArticleProp.formWarning }}
      </p>
      <form @submit.prevent="" class="contact-form">
        <label for="ContactInfo">Your Email Adress</label>
        <input type="email" id="contecntInfo" placeholder="your Email" />
        <label for="TextArea">Your Message</label>
        <textarea
          name="message"
          id="TextArea"
          cols="30"
          rows="10"
          placeholder="Please Enter Your Message"
        ></textarea>
        <b-button variant="success" @click="onCall">CLICK ME HUMAN</b-button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: ['aboutArticleProp'],
  methods: {
    onCall() {
      console.log('gkoepskgpoKPOGKSPOGKEPOSGKPOESGKPOESKPO')
    },
  },
}
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}

#main-about-page {
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100%;
}

.about-content {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 9%;
  align-items: stretch;
  border: 1px solid red;
  background-color: #caf0f8;
  border-radius: 6%;
  color: black;
  font-weight: 400;
  padding: 3%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
}

button {
  margin-top: 1%;
}

.about-title {
  margin-left: 25%;
}
</style>
