type Observer<T> = (data: T) => void;

export class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): () => void {
    this.observers.push(observer);
    return () => {
      this.observers = this.observers.filter((obs) => obs !== observer);
    };
  }

  notify(data: T): void {
    this.observers.forEach((obs) => obs(data));
  }
}

type Events = string;

const observable = new Observable<Events>();

const unsubscribe1 = observable.subscribe((data) => console.log(1 + data));
// const unsubscribe2 = observable.subscribe((data) => console.log(2 + data));
// const unsubscribe3 = observable.subscribe((data) => console.log(3 + data));

observable.notify(" Event occurred");

unsubscribe1();

observable.notify("Another event occurred");
