import { h } from 'preact';

export function Template({ children }) {
	return (
		<div id="body">
			<Header />
			<div id="wrapper">{children}</div>
		</div>
	);
}

function Header() {
	return (
		<div id="header">
			<a
				class="logo"
				href="http://www.thefutureoftheweb.com/"
				accesskey="1"
			>
				Coding with Jesse
			</a>

			<ul id="nav">
				<li class="selected">
					<a href="http://www.thefutureoftheweb.com/blog">Articles</a>
				</li>
				<li>
					<a href="http://www.thefutureoftheweb.com/contact/me">
						Contact
					</a>
				</li>
			</ul>

			<form
				method="get"
				action="http://www.thefutureoftheweb.com/blog/search"
			>
				<div>
					<input name="terms" size="20" type="text" />
					<input class="submit" value="Search" type="submit" />
				</div>
			</form>
		</div>
	);
}
