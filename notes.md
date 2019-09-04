# Planning a React App

1. Component Tree / Component Structure
2. Application State (Data)
3. Components vs Containers


## Layout
app-|
    |- layout -|
               |- toolbar --------------|
               |                        |- toggle
               |                        |- logo
               |                        |- navigation items
               |- sideDrawer -----------|
               |- backdrop
               |- {props.children} -----|- different pages - burger builder (container) -|
                                                                                         |- build controls -|
                                                                                         |                  |- build control(s)
                                                                                         |                  |- order button
                                                                                         |- burger -|
                                                                                         |          |- ingredient(s)
                                                                                         |
                                                                                         |- modal -| {props.children}

## State

* ingredients
  - meat, cheese

* purchased
* total price
