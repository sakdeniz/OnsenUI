<template>
  <ons-back-button @click.prevent="action">
    <slot></slot>
  </ons-back-button>
</template>

<script>
  import 'onsenui/esm/elements/ons-back-button';
  import { modifier } from '../mixins';

  export default {
    name: 'v-ons-back-button',
    inject: ['navigator'],
    mixins: [modifier],
    emits: ['click'],

    methods: {
      action() {
        let runDefault = true;
        this.$emit('click', { preventDefault: () => runDefault = false });

        if (runDefault && this.navigator.pageStack.length > 1) {
          this.navigator.popPage();
        }
      }
    }
  };
</script>
