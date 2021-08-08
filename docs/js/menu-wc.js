'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">women-compatibility-meter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' : 'data-target="#xs-components-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' :
                                            'id="xs-components-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' : 'data-target="#xs-injectables-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' :
                                        'id="xs-injectables-links-module-AppModule-83226a9b0b1d636fb0c7ac432bfbab86"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionSourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionSourceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResultService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsPageModule.html" data-type="entity-link" >DetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailsPageModule-dcc718334879aef24d999d13046ab694"' : 'data-target="#xs-components-links-module-DetailsPageModule-dcc718334879aef24d999d13046ab694"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsPageModule-dcc718334879aef24d999d13046ab694"' :
                                            'id="xs-components-links-module-DetailsPageModule-dcc718334879aef24d999d13046ab694"' }>
                                            <li class="link">
                                                <a href="components/DetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoTabPageModule.html" data-type="entity-link" >InfoTabPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoTabPageModule-1562546af91a49cd995fbcb81722ac9f"' : 'data-target="#xs-components-links-module-InfoTabPageModule-1562546af91a49cd995fbcb81722ac9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoTabPageModule-1562546af91a49cd995fbcb81722ac9f"' :
                                            'id="xs-components-links-module-InfoTabPageModule-1562546af91a49cd995fbcb81722ac9f"' }>
                                            <li class="link">
                                                <a href="components/InfoTabPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoTabPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionaireTabPageModule.html" data-type="entity-link" >QuestionaireTabPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuestionaireTabPageModule-6365ae7d1c0f166d5cbfea534d3178ed"' : 'data-target="#xs-components-links-module-QuestionaireTabPageModule-6365ae7d1c0f166d5cbfea534d3178ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionaireTabPageModule-6365ae7d1c0f166d5cbfea534d3178ed"' :
                                            'id="xs-components-links-module-QuestionaireTabPageModule-6365ae7d1c0f166d5cbfea534d3178ed"' }>
                                            <li class="link">
                                                <a href="components/QuestionGroupViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionGroupViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionaireTabPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionaireTabPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsPageModule.html" data-type="entity-link" >ResultsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' : 'data-target="#xs-components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' :
                                            'id="xs-components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' }>
                                            <li class="link">
                                                <a href="components/ResultsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Answer.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuestionGroup.html" data-type="entity-link" >QuestionGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResultGroup.html" data-type="entity-link" >ResultGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TotalRating.html" data-type="entity-link" >TotalRating</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});