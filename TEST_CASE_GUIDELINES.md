# Test Case Writing Guidelines

These are the rules to follow when writing test cases in this project.

## General Instructions

- Do not modify existing methods unless the existing method already matches the new requirement.
- If the requirement does not fit an existing method, create a new method instead.
- Always get approval before changing any code.
- Show the proposed changes before implementing them.
- Keep changes minimal and only update what is necessary.

## Locator Guidelines

- Define locators separately from method logic.
- Do not create locators inside methods.
- Keep locator declarations in the dedicated page-object or locator section of the file.
- Use reusable locator variables for elements that are referenced multiple times.

## Code Change Process

1. Review the existing code and identify whether a new method is required.
2. Propose the change before editing.
3. Wait for approval.
4. Implement the approved change.
5. Verify the update and keep the change focused.
