# Pitfalls When Rendering Lists with Empty Array

The list is empty, resulting in an `emptyList.length` value of `0`. Since the value `0` is considered `falsy` in JavaScript, the conditional logical operator `&&` does not proceed further and evaluates to `0`. Consequently, React comfortably renders this as 0 on the screen
