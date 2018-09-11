import { interval } from 'rxjs';
import { takeWhile, map} from 'rxjs/operators';

const count = 10;

const source$ = interval(1000);

source$.pipe(map(i => count - i), takeWhile(number => number >= 0)).subscribe(data => console.log(data));
