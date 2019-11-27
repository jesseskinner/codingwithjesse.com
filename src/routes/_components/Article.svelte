<script>
  export let title = "";
  export let date = false;
  export let link = false;

  export function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);

    return `${getMonthName(date)} ${getDayOfTheMonthWithOrdinal(
      date
    )}, ${date.getFullYear()}`;
  }

  function getDayOfTheMonthWithOrdinal(date) {
    const dayOfTheMonth = date.getDate();
    const ordinal = getOrdinal(dayOfTheMonth);

    return `${dayOfTheMonth}${ordinal}`;
  }

  function getOrdinal(number) {
    // using the % modulo operator to get the last digit of the number
    const lastDigitOfNumber = number % 10;

    switch (lastDigitOfNumber) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function getMonthName(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return months[date.getMonth()];
  }
</script>

<style>
  article {
    max-width: 800px;
    position: relative;
    margin: 3em 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1 {
    min-width: 70vw;
    margin-top: 0;
    font-size: 32px;
  }

  h1 a {
    color: #000;
  }

  .date {
    font-weight: bold;
  }

  article :global(pre) {
    padding: 2em 1em;
    box-sizing: border-box;
    overflow: auto;
    background: #29292e;
    color: #ffffff;
  }

  article :global(pre),
  .separator {
    margin: 0 -1em;
  }

  .separator {
    border-bottom: 1px solid #ccc;
  }

  @media (min-width: 1000px) {
    article :global(pre) {
      padding: 2em 15vw;
    }
    article :global(pre),
    .separator {
      margin: 0 0 0 -15vw;
      width: 99vw;
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <h1>
    {#if link}
      <a href={link}>{title}</a>
    {:else}{title}{/if}
  </h1>
  {#if date}
    <div class="date">{formatDate(date)}</div>
  {/if}
  <slot />
</article>

<div class="separator" />
