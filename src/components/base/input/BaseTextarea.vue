<template>
  <div
    class="form__inputGroup"
    :class="model ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
  >
    <label v-if="model" class="form__inputLabel">
      {{ textareaLabel }}
    </label>
    <textarea
      v-model="model"
      @change="changeValue"
      :placeholder="textareaPlaceholder"
      class="form__input form__textarea"
      rows="5"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    textareaLabel: {
      type: String,
      required: true
    },
    textareaPlaceholder: {
      type: String,
      required: true
    },
    textareaModel: {
      type: String,
      required: true
    },
    formKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      model: this.textareaModel
    }
  },
  watch: {
    textareaModel (newValue) {
      this.model = newValue
    }
  },
  methods: {
    changeValue () {
      const data = {
        formValue: this.model,
        formKey: this.formKey
      }
      this.$emit('updateValue', data)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
