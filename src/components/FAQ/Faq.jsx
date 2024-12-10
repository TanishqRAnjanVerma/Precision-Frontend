import React from "react";
import "../FAQ/faq.css";

const Faq = () => {
    return (
        <div className="faq">
            <h2 className="faq-header">Frequently Asked Questions &#40;FAQ &#41;</h2>

            <div className="faq-accordion">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                What types of cleaning equipment do you offer?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is
                                shown by default, until the collapse plugin adds the appropriate
                                classNamees that we use to style each element. These classNamees
                                control the overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth
                                noting that just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                What after-sales support do you provide for your cleaning equipment?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classNamees that we use to style each element. These
                                classNamees control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can modify any of
                                this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                How do I choose the right cleaning equipment for my specific needs?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classNamees that we use to style each element. These
                                classNamees control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can modify any of
                                this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                How do I choose the right cleaning equipment for my specific needs?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classNamees that we use to style each element. These
                                classNamees control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can modify any of
                                this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-btn">
                <button className="faq-show-more">Show More</button>
            </div>

        </div>
    );
};

export default Faq;
