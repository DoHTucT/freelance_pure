  <template>
    <div @click="closeModal" class="background">
      <div @click.stop class="response-frame">

      </div>
    </div>
  </template>

  <script>
    export default {
      name: "signInModal",

      props: {
        show: {
          type: Boolean,
          default: false,
        }
      },

      methods: {
        closeModal() {
          this.$emit('close');
        }
      }
    }
  </script>

  <style scoped>
    .background {
      position: fixed;
      width: 100%;
      height: 100%;
      bottom: 0px;
      background: rgba(37, 41, 49, 0.6);;
      backdrop-filter: blur(3px);
      z-index: 5;
    }

    .response-frame {
      position:fixed;
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%,-50%);
      -moz-transform:translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      width: 656px;
      height: 480px;
      background: #FFFFFF;
      box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
      border-radius: 12px;
    }


  </style>
