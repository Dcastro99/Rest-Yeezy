import { createElement } from 'react';

import { render, screen } from "@testing-library/react";

import Header from "../components/header/index";
// import Footer from "../components/footer/index";
import Results from "../components/results/index";
import Form from "../components/form/index";

describe("Header", () => {
  it("can render a header", () => {
    const header = createElement(Header);

    render(header);

    expect(header).toBeTruthy();
    expect(screen.getAllByText('REST-YEEZY')).toBeTruthy();
  });
});

// describe("Footer", () => {
//   it("can render a footer", () => {
//     const footer = createElement(Footer);

//     render(footer);

//     expect(footer).toBeTruthy();
//     expect(screen.getAllByText('&copy 2018')).toBeTruthy();
//   });
// });

describe("results", () => {
  it("can render results", () => {
    const results = createElement(Results);
    // render(createElement(Results));
    // const button = .queryByText('data: null')

    render(results);
    // render(button);

    expect(results).toBeTruthy();
    // expect(button).toBeTruthy();
    // expect(screen.getAllByText('REST-YEEZY')).toBeTruthy();
  });
});

describe("form", () => {
  it("can render forms", () => {
    const form = createElement(Form);

    render(form);

    expect(form).toBeTruthy();
    // expect(screen.getAllByText('REST-YEEZY')).toBeTruthy();
  });
});