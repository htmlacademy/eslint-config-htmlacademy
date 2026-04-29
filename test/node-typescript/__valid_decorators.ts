// valid
function Injectable(): ClassDecorator {
  return (target) => target;
}

@Injectable()
export class UserService {
  greet(name: string): string {
    return `hello, ${name}`;
  }
}
