import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);

const observable = source.pipe(map(i => i * 10));

observable.subscribe(data => console.log(data));