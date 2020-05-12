import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

describe('Logo', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
