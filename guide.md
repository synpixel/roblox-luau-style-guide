# Roblox Luau Style Guide

This style guide aims to provide best practices for writing Luau code in Roblox.

## File Structure

Files should consist of these things (if present) in order:

### nocheck

We first need to enable nocheck, this will greatly enhance the performance of the code & editor

```lua
--!nocheck
```

### Services

Then, we create a table to hold our services

```lua
tSERVICES={REP_STO=game.ReplicatedStorage,PLA=game.Players,WOR=game.Workspace}
```

The service names should contain the first 3 letters of every word, with each word being separated with `_`.

### Constants

Next, we need to create a table containing all the constants.

```lua
tCONSTANTS={FAV_NUM=7}
```

We apply the same naming scheme as services.

### `module` table

Next, we create the `module` table, **only if we are creating a module**, MODULES SHOULD BE AVOIDED AS THEY ARE BAD.

```lua
tmodule={}
```

### Functions

Next, we must define the functions inside of the module.

```lua
function tmodule:_CRT_BAZ()print[[Baz!!]]end
```

### Variables

Next, we define our **global** variables (local variables are longer to type out, stop wasting your time and write more code).

```lua
sa="Hello world"
```

### A return statement

```lua
return tmodule
```

## Naming

- Favor using [hungarion notation](https://en.wikipedia.org/wiki/Hungarian_notation) for identifiers. To do so, prepend the first letter of your value's datatype to its identifier.
- Use abbreviations everywhere! They make code faster to write.
- Use LOUD_SNAKE_CASE for constants or enum-like objects.
- Use \_SYN_CASE for functions.
- Use snake_case for modules of any type (restrict the use of modules, still).
- Use PascalCase for everything else

## Comments

Using comments makes your code more readable, because you can explain what your code does, not that reading your code matters much.

```lua
--table module for car
tmodule={};function tmodule:_CRT_CAR(pos)return{name=[[car]],pos=pos}end --function that create car
--return table module
return tmodule
```

Favor using section comments, they make sections easier to spot:

```lua
--functions
function _HLLO_WORLD()print[[Hello world]]end;function _PRNT_NUM()print(([[%s]]):format(na))end
--variables
na=4
```

## Typechecking

Typechecking is another "industry standard" that just makes the process of writing your code longer. Why do you need typechecking? Just be competent enough not to make silly mistakes.

Fortunately, using global variables prevents you from using typechecking, so that should not be an issue.

## Nesting

While keywords such as `and` and `or` let you write code faster, it also reduces the amount of code. The length of your file is what defines its quality, so nest as much as possible.

```lua
--check bCondition
if(bCondition)then
--check bOrCondition
if(bOrCondition)then print[[bOrCondition was truthy!]]return end --print "bOrCondition was truthy!" if bOrCondition is truthy
--check bCondition2
if(bCondition2)then
--check bCondition3
if(bCondition3)then
--check bCondition4
if(bCondition4)then print[[All conditions are truthy!]]end --print "All conditions are truthy!" if all conditions are truthy
end
end
end
```

## General Whitespace

- Never add spaces where you are able not to add one, it makes your code faster to write.

**Good:**

```lua
na=132
nb=17
```

**Bad:**

```lua
na = 132
nb = 17
```

- **Never indent. It makes your code longer.**
- Whitespace at the end of lines does not matter.
  - Disable your editor's auto-trimming function if you can!
- Never add a newline at the end of the file.
- No vertical alignment!

  - You can't use vertical alignment if you use the least amount of spaces possible.

- Use the most amount of statements per line.

**Good:**

```lua
function _FROB()print[[Hello world]]end;_FROB();_FROB()
```

**Bad:**

```lua
function _FROB()
  print[[Hello world]]
end
_FROB()
_FROB()
```

- Never use empty lines to break down your code, again: easier to write.

**Good:**

```lua
function _GRGL()print[[Hello world]]end;_GRGL();function _GBL()print[[Bye world]]end;_GBL();_GBL()
```

**Bad:**

```lua
function _GRGL()print[[Hello world]]end;_GRGL()

function _GBL()print[[Bye world]]end;_GBL();_GRGL()
```

## Blocks

- Use parentheses around the conditions in if, while, or repeat blocks. They aren't necessary in Luau, but it makes your code more idiomatic.

```lua
if(bCondition)then end;while(bCondition)do end;repeat until(bCondition)
```

- Don't use `do` blocks to limit the scope of a variable, just append a random sequence of characters after your identifier so you can't shadow it!

```lua
na = 4
naiubu34N = 5
```

## Literals

- Use brackets when declaring string literals.
  - It makes using double quotes in your string easier.
  - Empty strings are easier to identify with brackets.

**Good:**

```lua
print[[Hello world]]
```

**Bad:**

```lua
print"Hello world";print'Hello world'
```

## Tables

- Tables with both list-like and dictionary-like keys are ok.
  - Iterating over these _mixed_ tables was made easy with [generalized iteration](https://luau-lang.org/syntax#generalized-iteration).

## Functions

- Add as much arguments to a given function as needed to support every use case

```lua
function _PRNT_HLLO_WRLD(ShldExpldBsplt, DoStf, BusNt, DoMrStuff, Rcrsv, PrntHllo)--[[...]]end
```

- Never use parentheses for function calls

**Good:**

```lua
print[[Hello world]]
```

**Bad:**

```lua
print([[Hello world]])
```
