# Optimization Rules

## Anchor Patterns

- **Repeated `try_borrow_data()`**: Suggest caching account data outside loops.
- **Multiple `load_mut()` calls**: Suggest reducing mutable references.

## Rust Patterns

- **Unnecessary `.clone()`**: Suggest using references instead.

## Compute Unit Patterns

- **Loops (`for`, `while`)**: Suggest bounding iterations and avoiding heavy operations inside.