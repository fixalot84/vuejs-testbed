export const TableOfContents = {
  template: `
    <template v-if="headers">
      <h4>ð ëª©ì°¨</h4>
      <ul>
        <li v-for="item in headers" :style="{ 'margin-left': item.marginLeft }">
          <a :href="item.href">{{item.title}}</a>
        </li>
      </ul>
    </template>
  `,
  props: ['text'],
  data() {
    return {
      headers: null
    };
  },
  mounted() {
    let nodeList = document.querySelectorAll('h2, h3');
    let headers = [];
    nodeList.forEach((ele) => {
      let newId = ele.innerText.replace(/\s/g, '-');
      headers.push({
        title: ele.innerText,
        href: '#' + newId,
        marginLeft: ele.tagName == 'H2' ? 'auto' : '15px'
      });
      // ì¬ì¤ ë§ì§ ë£ëê±´ ê¼¼ìê³  ë´ ì ëì nested ulë¡ ì²ë¦¬íëë° ì´ì¼íê²¨ ðµâð«
      ele.setAttribute('id', newId);
      this.headers = headers;
    });
  }
};
