import Vue from 'vue';
import Loader from '@/components/Loader';

describe('Loader.vue', () => {
  it('should show a loader on screen while loading', () => {
    const Constructor = Vue.extend(Loader);
    const vm = new Constructor({ propsData: { loading: true } }).$mount();
    expect(vm.$el.querySelector('.loading-bars').children[0].className)
      .to.equal('dark');
  });
  it('should show the content while not loading', () => {
    const Constructor = Vue.extend(Loader);
    const vm = new Constructor({ propsData: { loading: false } }).$mount();
    expect(vm.$el.children[0].tagName)
      .to.equal('DIV');
  });
});
