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
                    <a href="index.html" data-type="index-link">Women Compatibility Meter Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#components-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' : 'data-target="#xs-components-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' :
                                            'id="xs-components-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' : 'data-target="#xs-injectables-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' :
                                        'id="xs-injectables-links-module-AppModule-650f67d58fca17b953753fb0987e8bcf026132e294800e8650b83d5352f2c373aef33a77e85c3f4c867349dc6935d15a1985996ef2f5ac2ace8c3fffda58902f"' }>
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
                                            'data-target="#components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' : 'data-target="#xs-components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' :
                                            'id="xs-components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' }>
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
                                            'data-target="#components-links-module-InfoTabPageModule-4ae2456f9d18fdb2191ba0ff8980ff90ee6cddb6b70ed8bc11979e329f804f908bbaaa8fcc2d8d13e84b7ebd02a1d9fd0deab2b2c509cc0b5ce3613406b5d09d"' : 'data-target="#xs-components-links-module-InfoTabPageModule-4ae2456f9d18fdb2191ba0ff8980ff90ee6cddb6b70ed8bc11979e329f804f908bbaaa8fcc2d8d13e84b7ebd02a1d9fd0deab2b2c509cc0b5ce3613406b5d09d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoTabPageModule-4ae2456f9d18fdb2191ba0ff8980ff90ee6cddb6b70ed8bc11979e329f804f908bbaaa8fcc2d8d13e84b7ebd02a1d9fd0deab2b2c509cc0b5ce3613406b5d09d"' :
                                            'id="xs-components-links-module-InfoTabPageModule-4ae2456f9d18fdb2191ba0ff8980ff90ee6cddb6b70ed8bc11979e329f804f908bbaaa8fcc2d8d13e84b7ebd02a1d9fd0deab2b2c509cc0b5ce3613406b5d09d"' }>
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
                                            'data-target="#components-links-module-QuestionaireTabPageModule-83058f5d10cb7e0ff34670444369c2526f15138257294cdc4e6937b30295f65760abe85c89aa96e7c301e0265ce1315246e5e6a122e0eeff4a893768e4acf09c"' : 'data-target="#xs-components-links-module-QuestionaireTabPageModule-83058f5d10cb7e0ff34670444369c2526f15138257294cdc4e6937b30295f65760abe85c89aa96e7c301e0265ce1315246e5e6a122e0eeff4a893768e4acf09c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionaireTabPageModule-83058f5d10cb7e0ff34670444369c2526f15138257294cdc4e6937b30295f65760abe85c89aa96e7c301e0265ce1315246e5e6a122e0eeff4a893768e4acf09c"' :
                                            'id="xs-components-links-module-QuestionaireTabPageModule-83058f5d10cb7e0ff34670444369c2526f15138257294cdc4e6937b30295f65760abe85c89aa96e7c301e0265ce1315246e5e6a122e0eeff4a893768e4acf09c"' }>
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
                                            'data-target="#components-links-module-ResultsPageModule-14f952d4d02cdcd70f5692e2e31de775d55e6c3edf774353389f498160551caf0d76f6ad9ca02198f3a1abd5d8693faceb9934996d3b9543b77008893a23cdd0"' : 'data-target="#xs-components-links-module-ResultsPageModule-14f952d4d02cdcd70f5692e2e31de775d55e6c3edf774353389f498160551caf0d76f6ad9ca02198f3a1abd5d8693faceb9934996d3b9543b77008893a23cdd0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultsPageModule-14f952d4d02cdcd70f5692e2e31de775d55e6c3edf774353389f498160551caf0d76f6ad9ca02198f3a1abd5d8693faceb9934996d3b9543b77008893a23cdd0"' :
                                            'id="xs-components-links-module-ResultsPageModule-14f952d4d02cdcd70f5692e2e31de775d55e6c3edf774353389f498160551caf0d76f6ad9ca02198f3a1abd5d8693faceb9934996d3b9543b77008893a23cdd0"' }>
                                            <li class="link">
                                                <a href="components/ResultsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/QuestionaireGuard.html" data-type="entity-link" >QuestionaireGuard</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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