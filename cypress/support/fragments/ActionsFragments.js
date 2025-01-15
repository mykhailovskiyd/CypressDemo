import FragmentSelectors from "C:/CypressDemo/cypress/support/selectors/FragmentSelectors";

class ActionFragments {
    openProductDetails(name) {
        cy.get(FragmentSelectors.actionsFragment.itemName).each(($element, index, $list) => {
            var productName = $element.text()
            if (productName.includes(name)) {
                cy.get(FragmentSelectors.actionsFragment.itemName).eq(index).click()
            }
        })

    }
}

export default ActionFragments;