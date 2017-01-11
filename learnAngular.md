#Template/View
Template and view are the same, it is the html along with the
additional markup of angular. This html is then compiled by
angular.

#Two way data binding
Every time value of DOM element changes, angular recalculates the
expression associated with that DOM element and re-renders that
element. When value of some variable changes in controller the same
process can be initated usin $apply. This means its possible to create
applications whose view reflects the actual value of model(variables).
This feature is called Two-way data binding.

#Scope
Scope is an object in angular, it is used to store variables and functions
which are relevant to the specific part of the view. The varibles and
functions stored in scope are called models and logic respectively. Scope provides
context within which functions inside the scope operate.

#Hirearchy of scope
the scope of a controller exists only within that controller and inside the
dom element on which the controller was bound. Scope that is declared along
with the angular module is available throughout the module to all controllers
and services.


#Root scope
any variable or logic defined in root scope is availbale to all controllers.
Since this lives throughout the existence of app it uses up memmory. so it
is advisable not to define variable in root scope to avoid memmory loss.When
the digest loop works it also checks all the variables in the scope to see
if there are any changes. This makes a digest loop longer.


#Apply($apply)
when some changes occur to scope varibles outside angular relam this change
is propogated through apply

#Watch($watch)
when there is some change in the view angular runs a digest loop on all the
elements in in the watch list.

both of the above actions trigger the digest loop.

#watch(listener,expression,objectEqulity):
    this assigns a listener to expression and applies the objectEqulity to
    check if expression has changed. this expression should not change when
    repeatedly executing with the same input. ie it should be idempotent

#digest:
    this is the function which preforms the comparison between the current
    expression and the previous one and checks for any changes using the
    comparison specicifed in the watch. digest is a loop. it is executed till
    the current and previous expressions are same.

#$stateChangeStart:
  stateChangeStart  :it is an event listener which listens to all state changes in
  angular.
  stateChangeStartSuccess: it is a listener which is triggered when state
  change is successful.
  stateChangeStartError: it is triggered when state change gives an excetption.

#Promise:
    Promise works by assigning expressions to execute on success or faliure of the main
    expression. Asynchrounous requests need time to process. If we wait till request is
    processed to work out the next step it will halt the code execution till the respon
    se is got. Promise works by having an executor function which will set a status fla
    g on completion. A success or a faliure function will then execute on the result of
    the executor by reading the status flag. Since sucess or faliure has to be executed
    only once, the promise ensures this by setting the value of status flag to fulfille
    d/error once promise has been executed.

##Dependencies in a promise:
	dependency is a javascript expression that is awaiting the execution of promise
	from a previous expression. This function is passed on to the original promise
	object as a function to be executed on the success of the child promise.

example ajax requests: made in javascript.

#Observables:
    An observable does not execute the main script until it percieves a change in input.
    When it executes the main script, it has the choice of cancelling the response if it
    does not meet the certain criteria.

#Observable/Promise
    Observable does not execute the main     	Promise executes
    script until it precives a change in        the main executor script as soon as it is created.
    input variable.

    It can cancell the observer object un       Promise response can never be cancelled
    der conditions.
