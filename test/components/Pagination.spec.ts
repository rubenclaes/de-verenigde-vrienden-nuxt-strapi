import { mount } from '@vue/test-utils';
import ItemListNav from '@/components/Pagination.vue';

describe('Pagination.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(ItemListNav, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        feed: 'restaurant',
        page: 10,
        maxPage: 20
      }
    });
  });

  it('has received "restaurant" as the feed property', () => {
    expect(cmp.vm.feed).toEqual('restaurant');
  });

  it('has received 10 as the page property', () => {
    expect(cmp.vm.page).toEqual(10);
  });

  it('has received 20 as the maxPage property', () => {
    expect(cmp.vm.maxPage).toEqual(20);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
