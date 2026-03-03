# The Enchanted Brew Shop Test Plan

## Application Overview

The Enchanted Brew Shop is a fantasy-themed e-commerce site for magical potions. It features a "Potion of the Week" with promotional pricing, a custom potion builder with various options (base potions, sizes, ingredients, potency levels), real-time order calculation, and a delivery form with fantasy-themed fields. The site includes order confirmation functionality and customer review sections.

## Test Scenarios

### 1. Featured Potion Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add Featured Potion to Order

**File:** `tests/featured-potion/add-featured-potion.spec.ts`

**Steps:**
  1. Navigate to the Potion Shop homepage
    - expect: Page loads successfully
    - expect: Featured potion 'Elixir of Eternal Focus' is displayed
    - expect: Original price shows '40 gold' with strikethrough
    - expect: Discounted price shows '34 gold'
    - expect: 15% OFF badge is visible
  2. Click the 'Add to Order' button for the featured potion
    - expect: Button changes to '✓ Added!' and becomes disabled
    - expect: Order summary updates to show subtotal of 34.00 gold
    - expect: Total updates to 37.00 gold (34 + 3 brewing fee)
  3. Select a custom potion after adding featured potion
    - expect: Featured potion button resets to 'Add to Order'
    - expect: Order summary updates to reflect new selection
    - expect: Pricing recalculates correctly

#### 1.2. Featured Potion Display Validation

**File:** `tests/featured-potion/display-validation.spec.ts`

**Steps:**
  1. Verify featured potion section elements
    - expect: '✨ Potion of the Week' header is present
    - expect: Potion image placeholder is displayed
    - expect: Potion description is complete and readable
    - expect: Pricing display shows both original and sale prices clearly

### 2. Custom Potion Builder Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Base Potion Selection

**File:** `tests/custom-potion/base-potion-selection.spec.ts`

**Steps:**
  1. Select each base potion option individually
    - expect: Healing Draught (❤️) - 25 gold selections updates order summary
    - expect: Elixir of Strength (💪) - 30 gold selection updates order summary
    - expect: Potion of Wisdom (🧠) - 35 gold selection updates order summary
    - expect: Invisibility Brew (👻) - 45 gold selection updates order summary
    - expect: Only one base potion can be selected at a time
    - expect: Order summary reflects selected potion name and price

#### 2.2. Size Selection Functionality

**File:** `tests/custom-potion/size-selection.spec.ts`

**Steps:**
  1. Select Healing Draught base potion and test each size option
    - expect: Vial (🧴) 50ml - 1x price: 25 gold
    - expect: Flask (⚗️) 150ml - 1.5x price: 37.5 gold
    - expect: Bottle (🍾) 500ml - 2x price: 50 gold
    - expect: Size multiplier applies correctly to base potion price
    - expect: Order summary shows selected size and multiplied price

#### 2.3. Special Ingredients Selection

**File:** `tests/custom-potion/special-ingredients.spec.ts`

**Steps:**
  1. Select base potion and add individual special ingredients
    - expect: Dragon Scale (🐉) +15 gold adds correctly
    - expect: Moonstone Dust (🌙) +8 gold adds correctly
    - expect: Phoenix Feather (🔥) +20 gold adds correctly
    - expect: Enchanted Honey (🍯) +5 gold adds correctly
    - expect: Shadow Essence (🌑) +12 gold adds correctly
    - expect: Starlight Dew (⭐) +12 gold adds correctly
  2. Select multiple ingredients simultaneously
    - expect: Multiple ingredients can be selected
    - expect: Ingredients cost accumulates correctly
    - expect: Order summary shows total ingredient cost
  3. Deselect ingredients after selection
    - expect: Ingredients can be unchecked
    - expect: Pricing updates correctly when ingredients are removed
    - expect: Order summary reflects current selection

#### 2.4. Potency Level Selection

**File:** `tests/custom-potion/potency-selection.spec.ts`

**Steps:**
  1. Select base potion and test each potency level
    - expect: Standard - Regular strength: no price change
    - expect: Enhanced - +25% strength, +25% price: increases total by 25%
    - expect: Maximum - +75% strength, +75% price: increases total by 75%
    - expect: Potency multiplier applies to base potion + size + ingredients total
    - expect: Order summary shows selected potency level

#### 2.5. Quantity Controls

**File:** `tests/custom-potion/quantity-controls.spec.ts`

**Steps:**
  1. Test quantity increase and decrease buttons
    - expect: Plus (+) button increases quantity
    - expect: Minus (-) button decreases quantity
    - expect: Quantity cannot go below 1
    - expect: Pricing multiplies correctly by quantity
    - expect: Order summary shows current quantity
  2. Test direct quantity input
    - expect: User can type directly in quantity field
    - expect: Invalid inputs are handled appropriately
    - expect: Quantity changes reflect in pricing calculations

### 3. Order Summary and Pricing Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Real-time Price Calculations

**File:** `tests/order-summary/price-calculations.spec.ts`

**Steps:**
  1. Create complex custom potion with all options
    - expect: Base potion price calculates correctly
    - expect: Size multiplier applies properly
    - expect: Ingredients add-ons sum correctly
    - expect: Potency multiplier applies to subtotal
    - expect: Quantity multiplier works on final potion price
    - expect: Brewing fee (3 gold) remains constant
    - expect: Total = (Base × Size × Potency + Ingredients) × Quantity + Brewing Fee

#### 3.2. Order Summary Display

**File:** `tests/order-summary/summary-display.spec.ts`

**Steps:**
  1. Verify order summary shows all relevant information
    - expect: Selected potion name displays correctly
    - expect: Size selection shows (with multiplier)
    - expect: Potency level displays
    - expect: Individual ingredient costs are calculated
    - expect: Quantity is clearly shown
    - expect: Subtotal, brewing fee, and total are distinct
    - expect: All prices format consistently with 'gold' currency

#### 3.3. Order State Management

**File:** `tests/order-summary/state-management.spec.ts`

**Steps:**
  1. Test order state when no potion is selected
    - expect: Shows 'No potion selected'
    - expect: Pricing shows 0.00 gold subtotal
    - expect: Only brewing fee (3 gold) shows in total
    - expect: Size and potency show default values
  2. Change selections multiple times
    - expect: Order summary updates immediately
    - expect: Previous selections are cleared properly
    - expect: No phantom pricing or display issues

### 4. Delivery Form Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Required Field Validation

**File:** `tests/delivery-form/required-validation.spec.ts`

**Steps:**
  1. Attempt to submit form with empty required fields
    - expect: Form submission is prevented
    - expect: Focus moves to first empty required field
    - expect: No order confirmation appears
  2. Fill only Full Name field and submit
    - expect: Form submission is prevented
    - expect: Focus moves to next empty required field (Castle/Tower Name)
  3. Fill Full Name and Castle/Tower Name, submit without Kingdom/Realm
    - expect: Form submission is prevented
    - expect: Focus moves to Kingdom/Realm field

#### 4.2. Successful Order Submission

**File:** `tests/delivery-form/successful-submission.spec.ts`

**Steps:**
  1. Create custom potion order and fill all required delivery fields
    - expect: Full Name accepts text input
    - expect: Castle/Tower Name accepts text input
    - expect: Kingdom/Realm accepts text input
    - expect: All fields retain entered values
  2. Submit complete form with valid data
    - expect: Order confirmation modal appears
    - expect: 'Order Confirmed!' heading is displayed
    - expect: Order number is generated (format: EB-#####)
    - expect: Estimated delivery matches selected delivery method
    - expect: Continue Shopping button is present
    - expect: Close (×) button is present

#### 4.3. Optional Fields Testing

**File:** `tests/delivery-form/optional-fields.spec.ts`

**Steps:**
  1. Test optional fields functionality
    - expect: Contact Crystal (email) accepts email-like input
    - expect: Tower/Room Number accepts text input
    - expect: Special Instructions accepts multi-line text
    - expect: Form submits successfully with only required fields filled

#### 4.4. Delivery Method Selection

**File:** `tests/delivery-form/delivery-methods.spec.ts`

**Steps:**
  1. Test delivery method options
    - expect: Owl Post (🦉) is selected by default
    - expect: Owl Post shows '3-5 days · 5 gold'
    - expect: Dragon Express (🐲) shows 'Next day · 15 gold'
    - expect: Only one delivery method can be selected
    - expect: Delivery cost should update order total (though not visible in current implementation)

### 5. User Interface and Experience Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Page Layout and Navigation

**File:** `tests/ui-ux/page-layout.spec.ts`

**Steps:**
  1. Verify page header and branding
    - expect: Site title 'The Enchanted Brew Shop' is prominently displayed
    - expect: Tagline 'Handcrafted potions since 1247' is visible
    - expect: Shop hours '🦉 Owl Post: 3-5 days' and 'Open dawn to dusk' are shown
  2. Verify main content sections
    - expect: Featured potion section loads completely
    - expect: Custom potion builder is laid out clearly
    - expect: Order summary sidebar is positioned correctly
    - expect: Delivery details form is well-structured
  3. Verify footer content
    - expect: Shop hours, visit info, and contact details are present
    - expect: Social media links are functional (or properly stubbed)
    - expect: Copyright notice displays current year range
    - expect: Satisfaction guarantee message is visible

#### 5.2. Interactive Elements

**File:** `tests/ui-ux/interactive-elements.spec.ts`

**Steps:**
  1. Test all clickable elements respond appropriately
    - expect: Radio buttons provide visual feedback when selected
    - expect: Checkboxes show checked/unchecked states clearly
    - expect: Buttons show hover and active states
    - expect: Form inputs focus properly when clicked
  2. Test keyboard navigation
    - expect: Tab navigation works through form elements
    - expect: Radio button groups navigate with arrow keys
    - expect: Submit button is reachable via keyboard
    - expect: Form submission works with Enter key

#### 5.3. Responsive Design Validation

**File:** `tests/ui-ux/responsive-design.spec.ts`

**Steps:**
  1. Test layout at different viewport sizes
    - expect: Content remains readable at mobile sizes
    - expect: Interactive elements remain touchable
    - expect: Order summary remains accessible
    - expect: Form fields stack appropriately on narrow screens

### 6. Edge Cases and Error Handling Tests

**Seed:** `tests/seed.spec.ts`

#### 6.1. Input Validation Edge Cases

**File:** `tests/edge-cases/input-validation.spec.ts`

**Steps:**
  1. Test extremely long text inputs in form fields
    - expect: Long names are handled gracefully
    - expect: Long addresses don't break layout
    - expect: Special instructions field handles extended text
  2. Test special characters in form fields
    - expect: Unicode characters are accepted
    - expect: Special symbols don't cause errors
    - expect: Emoji characters are handled properly
  3. Test quantity field with edge values
    - expect: Quantity cannot be set below 1
    - expect: Very large quantities are handled appropriately
    - expect: Non-numeric input is validated

#### 6.2. Concurrent User Actions

**File:** `tests/edge-cases/concurrent-actions.spec.ts`

**Steps:**
  1. Rapidly click multiple UI elements
    - expect: Multiple rapid clicks don't cause errors
    - expect: State remains consistent
    - expect: Order calculations remain accurate
  2. Change selections while form is focused
    - expect: Form data is preserved when changing potion selections
    - expect: Order summary updates don't interfere with form input
    - expect: No data loss occurs during rapid changes

#### 6.3. Browser Compatibility

**File:** `tests/edge-cases/browser-compatibility.spec.ts`

**Steps:**
  1. Test functionality across different browsers
    - expect: All interactive elements work in Chrome
    - expect: All interactive elements work in Firefox
    - expect: All interactive elements work in Safari
    - expect: form submission works consistently
    - expect: Order calculations are accurate across browsers

#### 6.4. Performance and Loading

**File:** `tests/edge-cases/performance.spec.ts`

**Steps:**
  1. Test page load performance
    - expect: Page loads within reasonable time
    - expect: Images load or show appropriate placeholders
    - expect: Interactive elements become available quickly
    - expect: No console errors during load
  2. Test order calculation performance
    - expect: Price updates happen immediately
    - expect: Complex calculations (multiple ingredients, high quantity) don't cause delays
    - expect: UI remains responsive during calculations
