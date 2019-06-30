module.exports = {
  vueTemplate: componentName => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ${componentName} extends Vue {

}
</script>

<style lang="scss" scoped>
.${componentName} {

}
</style>
`
  },
  entryTemplate: `import Main from './main.vue'
export default Main
`
}

