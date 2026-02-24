1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

Ans :These are used to select elements from the DOM.
#getElementById:
1.Selects element using id.
2.Always returns only one element.
3.id is unique.

#getElementsByClassName:
1.Selects elements using class name.
2.Returns HTMLCollection (multiple elements).
3.Need loop to use them.

#querySelector:
1.Selects first matching element.
2.Uses CSS selector.

#querySelectorAll:
1.Selects all matching elements.
2.Returns NodeList.

2. How to create and insert a new element into DOM?
Ans :
1.Create element.
2.Add content.
3.Insert into DOM.

3. What is Event Bubbling?
Ans: Event Bubbling means event goes from child then parent .First child, then parent this is Event Bubbling.

4. What is Event Delegation? Why useful?
Ans:
Event Delegation means adding event listener to parent instead of child.if any li clicked, parent handles it.
Why useful: Less code, better performance,works for dynamic elements.

5. Difference between preventDefault() and stopPropagation()?
ans:
preventDefault() is Stops default browser action.
StopPropagation() is Stops event bubbling.
