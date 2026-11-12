"""Format a bounded number of seconds as an ``HH:MM:SS`` clock string."""

_MAX_SECONDS = 359999


def seconds_to_clock(seconds: int) -> str:
    """Return ``seconds`` as a zero-padded ``HH:MM:SS`` clock string.

    ``seconds`` must be an exact built-in int in [0, 359999] (up to
    ``99:59:59``). Hours never wrap at 24 (90000 -> ``"25:00:00"``) and 0
    returns ``"00:00:00"``. bool, int subclasses and all other types raise
    TypeError; out-of-range values (negatives included) raise ValueError.
    Type is validated before range. No mutation, retained state, I/O or
    dependencies.
    """
    # `type(seconds) is not int` rejects bool, int subclasses and every
    # other non-int type in a single check.
    if type(seconds) is not int:
        raise TypeError("seconds must be an exact built-in int")
    if seconds < 0 or seconds > _MAX_SECONDS:
        raise ValueError("seconds must be in the range [0, 359999]")

    hours, rest = divmod(seconds, 3600)
    minutes, secs = divmod(rest, 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"
