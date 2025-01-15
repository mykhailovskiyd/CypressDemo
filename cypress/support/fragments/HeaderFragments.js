import FragmentSelectors from "C:/CypressDemo/cypress/support/selectors/FragmentSelectors";

class HeaderFragments{
    goToWhatsNew(){
        cy.get(FragmentSelectors.headerFragment.whatsNewLink, { timeout: 2000 }).click()

    }
}

export default HeaderFragments;