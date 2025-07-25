# mypy: allow-untyped-defs

import collections

from typing import ClassVar, DefaultDict, Optional, Type


class BidiException(Exception):
    # The error_code class variable is used to map the JSON Error Code (see
    # https://w3c.github.io/webdriver/#errors) to a BidiException subclass.
    # TODO: Match on error and let it be a class variables only.
    error_code: ClassVar[str]

    def __init__(self, message: str, stacktrace: Optional[str] = None):
        super().__init__()

        self.message = message
        self.stacktrace = stacktrace

    def __repr__(self):
        """Return the object representation in string format."""
        return f"{self.__class__.__name__}({self.error_code}, {self.message}, {self.stacktrace})"

    def __str__(self):
        """Return the string representation of the object."""
        message = f"{self.error_code} ({self.message})"

        if self.stacktrace is not None:
            message += f"\n\nRemote-end stacktrace:\n\n{self.stacktrace}"

        return message


class InvalidArgumentException(BidiException):
    error_code = "invalid argument"


class InvalidSelectorException(BidiException):
    error_code = "invalid selector"


class InvalidSessionIDError(BidiException):
    error_code = "invalid session id"


class InvalidWebExtensionException(BidiException):
    error_code = "invalid web extension"


class MoveTargetOutOfBoundsException(BidiException):
    error_code = "move target out of bounds"


class NoSuchAlertException(BidiException):
    error_code = "no such alert"


class NoSuchElementException(BidiException):
    error_code = "no such element"


class NoSuchFrameException(BidiException):
    error_code = "no such frame"


class NoSuchInterceptException(BidiException):
    error_code = "no such intercept"


class NoSuchHandleException(BidiException):
    error_code = "no such handle"


class NoSuchHistoryEntryException(BidiException):
    error_code = "no such history entry"


class NoSuchNetworkCollectorException(BidiException):
    error_code = "no such network collector"


class NoSuchNetworkDataException(BidiException):
    error_code = "no such network data"


class NoSuchNodeException(BidiException):
    error_code = "no such node"


class NoSuchRequestException(BidiException):
    error_code = "no such request"


class NoSuchScriptException(BidiException):
    error_code = "no such script"


class NoSuchUserContextException(BidiException):
    error_code = "no such user context"


class NoSuchWebExtensionException(BidiException):
    error_code = "no such web extension"


class UnableToCaptureScreenException(BidiException):
    error_code = "unable to capture screen"


class UnableToSetCookieException(BidiException):
    error_code = "unable to set cookie"


class UnableToSetFileInputException(BidiException):
    error_code = "unable to set file input"


class UnavailableNetworkDataException(BidiException):
    error_code = "unavailable network data"


class UnderspecifiedStoragePartitionException(BidiException):
    error_code = "underspecified storage partition"


class UnknownCommandException(BidiException):
    error_code = "unknown command"


class UnknownErrorException(BidiException):
    error_code = "unknown error"


class UnsupportedOperationException(BidiException):
    error_code = "unsupported operation"


def from_error_details(error: str, message: str, stacktrace: Optional[str]) -> BidiException:
    """Create specific WebDriver BiDi exception class from error details.

    Defaults to ``UnknownErrorException`` if `error` is unknown.
    """
    cls = get(error)
    return cls(message, stacktrace)


def get(error_code: str) -> Type[BidiException]:
    """Get exception from `error_code`.

    It's falling back to ``UnknownErrorException`` if it is not found.
    """
    return _errors.get(error_code, UnknownErrorException)


_errors: DefaultDict[str, Type[BidiException]] = collections.defaultdict()
for item in list(locals().values()):
    if isinstance(item, type) and item != BidiException and issubclass(item, BidiException):
        _errors[item.error_code] = item
