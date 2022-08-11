import React from 'react'
import {render,  screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom';

import Card from "./Card";


describe("Card component test", () => {

    it("renders", async () => {
        render(<Card cardName={"cardName"}/>);
        await screen.queryByText("cardName");
    })

    it("calls callback", async () => {
        const cardDeleteCallBack = jest.fn();
        const user = userEvent.setup();
        render(<Card cardID={"12345"} cardName={"cardName"} deleteCard={cardDeleteCallBack}/>);
        await user.click(screen.queryByText("Delete me"));
        expect(cardDeleteCallBack).toBeCalledTimes(1);
        expect(cardDeleteCallBack).toBeCalledWith("12345"); jest jest-dom testing library jest-dom tesing-library react user-event
    })
})