<template>
  <section class="home-page-section">
    <div>
      <div class="contents">
        <div class="text">
          <div>
            <h1 class="first-paragraph-title">
              {{ firstArticleProp.index.title }}
            </h1>
            <div class="first-paragraph-first-article">
              <article>
                {{ firstArticleProp.index.mainArticle }}
              </article>
            </div>
            <div class="first-paragraph-second-article">
              <article style="margin-left: 3%">
                {{ firstArticleProp.index.article1 }}
              </article>
            </div>
          </div>
          <div class="first-paragraph-third-article">
            <div>
              <article>
                {{ firstArticleProp.index.article2 }}
              </article>
            </div>
          </div>
        </div>
        <div class="image-div">
          <nuxt-img class="image" src="/buckets.jpg" />
        </div>
      </div>
      <div class="second-paragraph">
        <div class="image-div">
          <nuxt-img class="image" src="/bucket2.jpg" />
        </div>
        <div class="second-paragraph-articles">
          <h2 class="second-paragraph-title">
            {{ firstArticleProp.index.secondParagraphTitle }}
          </h2>
          <div class="second-paragraph-first-article">
            <article>
              {{ firstArticleProp.index.secondParagraphArticleOne }}
            </article>
          </div>
          <div class="secnod-paragraph-second-article">
            <article>
              {{ firstArticleProp.index.secondParagraphArticleTwo }}
            </article>
          </div>
          <div class="second-paragraph-third-article">
            <article>
              {{ firstArticleProp.index.secondParagraphArticleThree }}
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'home-page',
  props: { firstArticleProp: { type: Object } },
}
</script>
