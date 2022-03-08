<template>
  <section class="productPageSection">
    <div class="main-div-of-products">
      <b-card
        v-for="products in productProps.index"
        :key="products.id"
        id="mainProductCard"
        :title="products.name"
        class="mb-2"
        tag="article"
        style="max-width: 20rem"
      >
        <!-- <b-card-text v-if="something" class="productPageCardText">
        </b-card-text> -->

        <!-- <b-card-text class="productPageCardImage" @load="getImg(products.imageLink)">
          <p>{{ products.imageLink }}</p>

        </b-card-text> -->

        <b-button class="productPageCardButton" href="#" variant="primary"
          >Go somewhere</b-button
        >
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  props: { productProps: { type: Object, default: null } },
  data() {
    return {}
  },
  methods: {
    getImg(data) {
      console.log(data)
    },
  },
}
</script>
