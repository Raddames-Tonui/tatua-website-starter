| Position     | Behavior                                                          |
| ------------ | ----------------------------------------------------------------- |
| **static**   | Default behavior. Appears where written, no offset allowed.       |
| **relative** | Moves visually, but leaves space behind. Good for nudging things. |
| **absolute** | Floats inside nearest `relative` parent. Fully removed from flow. |
| **fixed**    | Floats over everything, fixed to screen (not page).               |
| **sticky**   | Scrolls normally, but sticks once it reaches a set point.         |



## Z-Index and Stacking Context
Z-index controls layering of positioned elements. Understanding stacking context prevents common layering issues.