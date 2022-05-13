export const TemplateLiteral = {
  template: `
    <p>응애 나 아기 컴포넌트</p>
    <div><button type="button" @click="probe">probe</button></div>
    <p>{{message}}</p>
  `,
  data() {
    return {
      message: 'This is template literal message'
    }
  },
  methods: {
    probe() {
      debugger;
      console.log('probe');
    }
  }
};
