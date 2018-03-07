
import { mount } from "@vue/test-utils";
import Comments from "../src/components/comments.vue";

describe("Comments", () => {
  it("renders props.count when passed", () => {
    const count = 0;
    const wrapper = mount(Comments, { context: { props: { count } } });
    expect(wrapper.number()).toBe(0);
  });

});
