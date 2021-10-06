<template>
  <div>
    <div
      class="form__inputGroup"
      :class="checkEmptinessAndValidity"
    >
      <label v-if="model" class="form__inputLabel">
        {{ textareaLabel }}
      </label>
      <img
        v-if="model"
        :src="require(`@/assets/icons/${isInputTrue ? 'success' : 'wrong'}.svg`)"
        alt="Input validation icon"
        class="form__validationIcon"
      >

      <div class="form__charCounter">
        <span> {{ `${120 - model.length}` }} </span>
      </div>

      <textarea
        v-model="model"
        @input="changeValue"
        :placeholder="textareaPlaceholder"
        class="form__input form__textarea"
        rows="5"
      ></textarea>
    </div>

    <slot name="errorMessage"></slot>
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
    },
    isInputTrue: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      model: this.textareaModel
    }
  },
  computed: {
    checkEmptinessAndValidity () {
      if (this.model) {
        if (this.isInputTrue) {
          return 'form__inputGroup--filled form__inputGroup--success'
        }
        return 'form__inputGroup--filled form__inputGroup--wrong'
      }

      if (this.isInputTrue) {
        return 'form__inputGroup--empty'
      }
      return 'form__inputGroup--empty form__inputGroup--wrong'
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
