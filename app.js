
function* sayNames()
{
    yield 'malik';
    yield 'ateeq';
    yield 'arbaz';
}
const names = sayNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());