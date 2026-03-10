# Potion Shop Comprehensive Test Plan

## Application Overview

The Enchanted Brew Shop is a fantasy-themed e-commerce application for ordering magical potions. It features a discounted featured product section, a customizable potion builder with real-time pricing calculations, delivery options, and order confirmation. The application allows users to select base potions, sizes, special ingredients, potency levels, and quantities with dynamic pricing updates.

## Test Scenarios

### 1. Featured Product Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. should display featured product with discount

**File:** `tests/featured-product/discount-display.spec.ts`

**Steps:**
  1. Navigate to the Potion Shop homepage
    - expect: Featured product 'Elixir of Eternal Focus' should be displayed
    - expect: Original price of 40 gold should be shown with strikethrough
    - expect: Discounted price of 34 gold should be prominently displayed
    - expect: 15% OFF badge should be visible
    - expect: 'Add to Order' button should be enabled and clickable

#### 1.2. should successfully add featured product to order

**File:** `tests/featured-product/add-to-order.spec.ts`

**Steps:**
  1. Click the 'Add to Order' button for the featured product
    - expect: Button should change to '✓ Added!' and become disabled
    - expect: Order summary should update to include the featured product price
    - expect: Total should increase by 34 gold (discounted price) plus any applicable fees

### 2. Custom Potion Builder

**Seed:** `tests/seed.spec.ts`

#### 2.1. should allow base potion selection with price updates

**File:** `tests/custom-potion/base-potion-selection.spec.ts`

**Steps:**
  1. Select each base potion option (Healing Draught, Elixir of Strength, Potion of Wisdom, Invisibility Brew)
    - expect: Only one base potion can be selected at a time
    - expect: Order summary should update with the correct base potion name and price
    - expect: Subtotal should reflect the selected potion price (25, 30, 35, or 45 gold respectively)

#### 2.2. should calculate pricing correctly with size multipliers

**File:** `tests/custom-potion/size-pricing.spec.ts`

**Steps:**
  1. Select Healing Draught (25 gold) and change size from Vial to Flask to Bottle
    - expect: Vial (1x): Subtotal should be 25.00 gold
    - expect: Flask (1.5x): Subtotal should be calculated with 1.5x multiplier
    - expect: Bottle (2x): Subtotal should be calculated with 2x multiplier
    - expect: Order summary should display the correct size and multiplier

#### 2.3. should add special ingredients with correct pricing

**File:** `tests/custom-potion/special-ingredients.spec.ts`

**Steps:**
  1. Select a base potion and add various special ingredients individually and in combination
    - expect: Multiple ingredients can be selected simultaneously
    - expect: Each ingredient cost should be added to the ingredients section (5-20 gold)
    - expect: Subtotal should include base potion cost plus all selected ingredient costs
    - expect: Ingredients section should show total ingredient cost

#### 2.4. should apply potency multipliers correctly

**File:** `tests/custom-potion/potency-levels.spec.ts`

**Steps:**
  1. Select base potion, add ingredients, and test Standard, Enhanced, and Maximum potency levels
    - expect: Standard: No additional cost modifier
    - expect: Enhanced: +25% price increase should be applied to total
    - expect: Maximum: +75% price increase should be applied to total
    - expect: Order summary should display the selected potency level

#### 2.5. should handle quantity changes with accurate calculations

**File:** `tests/custom-potion/quantity-handling.spec.ts`

**Steps:**
  1. Configure a potion with base, size, ingredients, and potency, then test quantity changes using +/- buttons
    - expect: Quantity should start at 1
    - expect: Plus button should increment quantity
    - expect: Minus button should decrement quantity (minimum 1)
    - expect: Subtotal should multiply correctly by quantity
    - expect: Order summary should display correct quantity

### 3. Order Summary Calculations

**Seed:** `tests/seed.spec.ts`

#### 3.1. should display comprehensive order breakdown

**File:** `tests/order-summary/pricing-breakdown.spec.ts`

**Steps:**
  1. Create a complex order with base potion, size multiplier, ingredients, enhanced potency, and quantity of 2
    - expect: Base potion name and price should be displayed
    - expect: Size and multiplier should be shown correctly
    - expect: Potency level should be indicated
    - expect: Ingredients total should be calculated correctly
    - expect: Quantity should be displayed
    - expect: Subtotal should reflect all calculations
    - expect: Brewing Fee should be 3.00 gold
    - expect: Total should be Subtotal + Brewing Fee

#### 3.2. should update real-time with selection changes

**File:** `tests/order-summary/real-time-updates.spec.ts`

**Steps:**
  1. Make various selections and observe real-time pricing updates
    - expect: Every selection change should immediately update the order summary
    - expect: Price calculations should be accurate and consistent
    - expect: No stale or incorrect pricing should be displayed

### 4. Delivery Form Validation

**Seed:** `tests/seed.spec.ts`

#### 4.1. should require all mandatory fields

**File:** `tests/delivery-form/required-fields.spec.ts`

**Steps:**
  1. Attempt to submit the form with empty required fields
    - expect: Form submission should be prevented
    - expect: Focus should move to the first empty required field
    - expect: Required field validation should be triggered for Full Name, Castle/Tower Name, and Kingdom/Realm

#### 4.2. should accept valid delivery information

**File:** `tests/delivery-form/valid-data-entry.spec.ts`

**Steps:**
  1. Fill in all required fields with valid fantasy-themed data
    - expect: All text inputs should accept character input
    - expect: Form should validate successfully with complete required data
    - expect: Optional fields (Contact Crystal, Tower/Room Number, Special Instructions) should be fillable but not required

#### 4.3. should handle delivery method selection with pricing

**File:** `tests/delivery-form/delivery-methods.spec.ts`

**Steps:**
  1. Test switching between Owl Post and Dragon Express delivery options
    - expect: Only one delivery method can be selected at a time
    - expect: Owl Post should be selected by default (5 gold, 3-5 days)
    - expect: Dragon Express should be selectable (15 gold, next day)
    - expect: Delivery cost should be reflected in final total

### 5. Order Completion Flow

**Seed:** `tests/seed.spec.ts`

#### 5.1. should complete full order successfully

**File:** `tests/order-completion/successful-order.spec.ts`

**Steps:**
  1. Complete a full order workflow: select potion options, fill delivery form, and submit
    - expect: Order confirmation modal should appear
    - expect: Modal should display 'Order Confirmed!' message
    - expect: Unique order number should be generated (format: EB-XXXXX)
    - expect: Estimated delivery time should be shown based on selected delivery method
    - expect: 'Continue Shopping' button should be available

#### 5.2. should reset form after successful submission

**File:** `tests/order-completion/form-reset.spec.ts`

**Steps:**
  1. Complete an order and click 'Continue Shopping'
    - expect: Confirmation modal should close
    - expect: All form fields should be reset to default values
    - expect: Order summary should reset to initial state
    - expect: Featured product 'Add to Order' button should be reset to original state

### 6. Integration Testing

**Seed:** `tests/seed.spec.ts`

#### 6.1. should handle combined featured and custom products

**File:** `tests/integration/combined-orders.spec.ts`

**Steps:**
  1. Add featured product to order, then configure custom potion, and complete purchase
    - expect: Both products should be reflected in final pricing
    - expect: Order total should include featured product (34 gold) + custom potion + fees
    - expect: Order confirmation should acknowledge complete order

### 7. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 7.1. should handle boundary quantity values

**File:** `tests/edge-cases/quantity-boundaries.spec.ts`

**Steps:**
  1. Test quantity limits using +/- buttons and direct input
    - expect: Quantity should not go below 1 using minus button
    - expect: Quantity should handle reasonable upper limits
    - expect: Manual quantity input should be validated appropriately

#### 7.2. should handle special characters in form inputs

**File:** `tests/edge-cases/special-characters.spec.ts`

**Steps:**
  1. Test form inputs with special characters, unicode, and edge case strings
    - expect: Form should handle fantasy-appropriate special characters
    - expect: System should prevent or sanitize potentially harmful input
    - expect: Unicode characters should be supported for international names
