import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Board from "@/components/Board.vue";

describe("Board.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Board);
    expect(wrapper.find("#board"));
  });
});
